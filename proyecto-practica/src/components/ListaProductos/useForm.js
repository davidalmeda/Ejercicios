import { useState } from "react"

function useForm(initialValue = {
    showOnlyStock: false,
    text:""
}) {

    const [filters, setFilters] = useState(initialValue)

    function handleOnChangeForm(event) {
        if(event.target.name =="checkbox") {
            const newFilters = {
                ...filters,
                showOnlyStock: event.target.checked
            }
            setFilters(newFilters)
        } else {
            const newFilters = {
                ...filters,
                text: event.target.value
            }
            setFilters(newFilters) 
        }
    }
    return { filters, handleOnChangeForm }
}

export default useForm