//css
import './css/Cita.css'
import { InfPerson } from './InfPerson'

export const Cita = () => {
    return (
        <div className="cita">

            <div className="cita__img">
                <img src="https://i.pinimg.com/474x/92/c7/c7/92c7c750120016c44ec0b16837645c58.jpg" alt="" />
            </div>
            <div className="cita__content">
                {
                    [
                        { name: "Nombre", info: "Carlos daniel cruz peréz" },
                        { name: "Concepto", info: "Dolor de cabeza" },
                        { name: "Fecha", info: "2022-09-23" },
                        { name: "Hora", info: "05:23:23" },
                        { name: "Descripción", info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe consequuntur id quis eos amet omnis repellat rerum magni voluptatum eum minima ducimus nisi officia neque explicabo, laboriosam dolore. Cupiditate, eum" }
                    ].map((item, index) => (
                        <InfPerson key={index} data={item} />
                    ))
                }


            </div>

        </div>
    )
}
