import { categories } from "../data/categories"

export default function Form() {
  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categor&iacute;a:</label>
            <select
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
            >
                {categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Actividad</label>
            <input
                className="border border-slate-300 p-2 rounded-lg"
                id="activity"
                type="text"
                placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Pesas, Bicicleta"
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calor&iacute;as</label>
            <input
                className="border border-slate-300 p-2 rounded-lg"
                id="activity"
                type="number"
                placeholder="Calorías. ej. 300 o 500"
            />
        </div>
        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value={"Guardar"}
        />
    </form>
  )
}
