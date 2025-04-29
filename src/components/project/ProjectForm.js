
import { useEffect, useState } from 'react'

import Input from '../form/Input'


import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { data } from 'react-router-dom'


function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {

        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            }).catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }


    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    function handleCategory(e) {
        if (!e.target || !e.target.options) return;

        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];

        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: selectedOption.text,
            },
        });
    }


    return (

        <form className={styles.form} onSubmit={submit}>

            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o seu nome" handleOnChange={handleChange} value={project.name ? project.name : ''} />

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento" handleOnChange={handleChange} value={project.budget ? project.budget : ''} />

            <Select name="category_id" text="Selecione uma categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm