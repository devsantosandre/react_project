import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://ws.audioscrobbler.com/2.0/'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        // this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?method=artist.getsimilar&artist=bonjovi&api_key=53701585b00198db3a80dcf69bc4ef8c&format=json`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list}/>
            </div>
        )
    }
} 