export const InfPerson = ({ data }) => {
    const { name, info } = data

    return (
        <div className={`InfPerson cita${name}`}>
            <div className="cita__data">
                <p className='cita__tittle'>{name}:</p>
                <span className='cita__info'>{info}.</span>
            </div>
        </div>
    )
}
