"use client"
import { redirect } from "next/navigation"
import { useRouter } from 'next/navigation';

interface ITodoProps {
    title: string;
    id: string;
    complete: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    toggleTodo: (id: string, complete: boolean)=>void
    deleteItem: (id: string)=>void
}

function TodoItem({ title, id, complete, toggleTodo, deleteItem }: ITodoProps) {
    const router = useRouter();
    const deleteAndUpdate = async() => {
        await deleteItem(id);
        router.refresh()
    }
    return (

        <li className="flex gap-1 items-center">
            <input
                type="checkbox"
                id={id}
                className="cursor-pointer peer" 
                defaultChecked={complete}
                onChange={e=> toggleTodo(id, e.target.checked)}
                />
            <label htmlFor="id"
                className="peer-checked:line-through peer-checked:text-slate-500"
                >{title}</label>
            <button onClick={deleteAndUpdate}>delete</button>

        </li>


    )
}

export default TodoItem;