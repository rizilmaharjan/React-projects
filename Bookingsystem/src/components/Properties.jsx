export const Properties = ({imgs,name,Properties}) => {
  return (
    <>
        <div>
        
            <div className="w-52 h-36 rounded-lg">
                <img className="rounded-lg w-full h-full" src={imgs} alt={name} style={{objectFit:"cover"}} />
            </div>
            <div>
                <h1 className="font-semibold text-lg">{name}</h1>
                <p className="text-gray-500">{Properties}</p>
            </div>

        </div>

    </>
  )
}
