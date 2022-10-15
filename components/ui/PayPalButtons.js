import { useEffect, useRef, useState } from "react"
import Swal from "sweetalert2"
import { config } from "../../constants/config"

const PayPalButtons = ({ price, courseId, setCourse }) => {
  const [render, setRender] = useState(false)
  const paypalRef = useRef()

  const renderPaypalButtons = () => {
    paypal
      .Buttons({
        // Order is created on the server and the order id is returned
        createOrder: (data, actions) => {
          const jwt = localStorage.getItem("jwt")
          console.log({ jwt })
          return fetch(`${config.BASE_BACKEND_URL}/paypal/orders`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
              courseId,
              price,
            }),
          })
            .then((response) => response.json())
            .then((order) => order.id)
        },
        // Finalize the transaction on the server after payer approval
        onApprove: (data, actions) => {
          return fetch(
            `${config.BASE_BACKEND_URL}/paypal/orders/${data.orderID}/capture`,
            {
              method: "post",
              body: JSON.stringify({ price }),
            }
          )
            .then((response) => response.json())
            .then((orderData) => {
              // Successful capture! For dev/demo purposes:
              Swal.fire({
                title: "Excelente",
                html: "Ya puedes comenzar con el curso 🧠",
                icon: "success",
                confirmButtonText: "Excelente 😊",
                timer: 3000,
              })
              setCourse((oldCourseData) => ({
                ...oldCourseData,
                hasBoughtTheCourse: true,
              }))
            })
        },
        style: { color: "blue" },
      })
      .render(paypalRef.current)
  }

  useEffect(() => {
    if (render && courseId) {
      console.log("RENDER")
      renderPaypalButtons()
    } else {
      setRender(true)
    }
  }, [render, courseId])

  console.log({ price })

  return (
    <>
      <div
        className="df aic mt20 mb20 cblack"
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <h1 style={{ marginRight: "2rem" }}>${price}</h1>
        <div ref={paypalRef}></div>
      </div>
      <style jsx>{`
        .dom-ready {
          background-color: red;
        }
      `}</style>
    </>
  )
}

export default PayPalButtons
