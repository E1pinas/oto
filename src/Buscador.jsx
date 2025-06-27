export const Buscador =({onSubmit,valorInput,onChange})=>{
  return(
    <form onSubmit={onSubmit} className="mb-4">
        <input
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          value={valorInput}
          placeholder="Escribe algo..."
          onChange={onChange}
        />
      </form>
  )
}