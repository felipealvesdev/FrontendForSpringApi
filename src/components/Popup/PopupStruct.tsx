type Props = {
    className?: string,
    title: string,
    message: string
}

export default function PopupStruct(props:Props) {
  return (
    <div className={props.className}>

        <h1>{props.title}</h1>
        <p>{props.message}</p>

    </div>
  )
}
