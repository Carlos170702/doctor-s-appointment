//css
import './css/Cita.css'

export const Cita = () => {
    return (
        <div className="cita">

            <div className="cita__img">
                <img src="https://i.pinimg.com/474x/92/c7/c7/92c7c750120016c44ec0b16837645c58.jpg" alt="" />
            </div>
            <div className="cita__content">
                <div className='cita__time'>
                    <div className="cita__data">
                        <p className='cita__tittle'>fecha:</p>
                        <span className='cita__info'>2022-08-12</span>
                    </div>
                    <div className="cita__data">
                        <p className='cita__tittle'>Hora:</p>
                        <span className='cita__info'>05-12-12</span>
                    </div>
                </div>
                <div className="cita__data">
                    <h2 className='cita__tittle'>Descripción:</h2>
                    <p className='cita__info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe consequuntur id quis eos amet omnis repellat rerum magni voluptatum eum minima ducimus nisi officia neque explicabo, laboriosam dolore. Cupiditate, eum.</p>
                </div>
            </div>

        </div>
    )
}
