const Notification = ({ message, color }) => message === null ? null : <div className="msg" style={{color: color}}>{message}</div>

export default Notification