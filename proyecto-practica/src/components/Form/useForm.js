import { useState } from "react"

function useForm(initialValue = {
    text: "",
    number: 0,
    checkbox: false,
    date: "2023-10-06",
    file: "",
    radio: ""
}) {

    const [form, setForm] = useState(initialValue)

    function handleOnChangeForm(event) {
        const type = event.target.name

        if (type == "checkbox") {
            const newForm = {
                ...form,
                [type]: event.target.checked
            }
            setForm(newForm)
        } else if (type == "file") {
            const newForm = {
                ...form,
                [type]: event.target.files[0]
            }
            setForm(newForm)
        }
        else {
            const newForm = {
                ...form,
                [type]: event.target.value
            }
            setForm(newForm)
        }
    }

    function handleSubmit(event) {
        console.log(form)
        event.preventDefault()
    }


    return { form, handleOnChangeForm, handleSubmit }
}

export default useForm