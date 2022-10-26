import { useEffect, useRef, useState } from "react"
import Swal from "sweetalert2"
import { config } from "../../constants/config"

const PayPalButtons = ({ coursePrice, price, courseId, setCourse }) => {
  const [render, setRender] = useState(false)
  const paypalRef = useRef()

  const renderPaypalButtons = () => {
    paypal
      .Buttons({
        // Order is created on the server and the order id is returned
        createOrder: (data, actions) => {
          const token = localStorage.getItem("token")

          return fetch(`${config.BASE_BACKEND_URL}/paypal/orders`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              courseId,
              price,
            }),
          })
            .then((response) => response.json())
            .then(({ data }) => data.id)
        },
        // Finalize the transaction on the server after payer approval
        onApprove: (data, actions) => {
          const token = localStorage.getItem("token")
          return fetch(
            `${config.BASE_BACKEND_URL}/paypal/orders/${data.orderID}/capture`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ price }),
            }
          )
            .then((response) => response.json())
            .then(({ ok, data }) => {
              // Successful capture! For dev/demo purposes:
              if (ok) {
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
                  capture_id: data,
                }))
              } else {
                Swal.fire("UPS", data, "info")
              }
            })
        },
        style: { color: "blue" },
      })
      .render(paypalRef.current)
  }

  useEffect(() => {
    if (render && courseId) {
      renderPaypalButtons()
    } else {
      setRender(true)
    }
  }, [render, courseId])

  return (
    <>
      <div
        className="df aic jcsa mb20 cblack paypal_buttons_container"
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <div className="df fdc aic" style={{ marginRight: "2rem" }}>
          <h1
            className="tdlt cgreylight"
            style={{ fontSize: "1.5rem", fontWeight: "400", margin: "0" }}
          >
            ${coursePrice}
          </h1>
          <h1 style={{ fontSize: "3rem" }} className="cprice">
            ${price}
          </h1>
        </div>
        <div ref={paypalRef}></div>
      </div>
      <style jsx>{`
        .dom-ready {
          background-color: red;
        }

        .paypal_buttons_container {
          width: 60%;
        }

        h1 {
          margin: 0;
          font-family: cubano, sans-serif;
        }

        .cprice {
          background: linear-gradient(rgb(24, 255, 32), rgb(22, 175, 2));
          -webkit-background-clip: text;
          color: transparent;
        }

        @media screen (max-width: 800px) {
          .paypal_buttons_container {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default PayPalButtons
