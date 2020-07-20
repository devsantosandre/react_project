import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://ws.audioscrobbler.com/2.0/'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', listArtist: [], listAlbum: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchAlbum = this.handleSearchAlbum.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description
        axios.get(`${URL}?method=artist.getsimilar&api_key=53701585b00198db3a80dcf69bc4ef8c&artist=${search}&format=json&limit=10`)
            .then(resp => this.setState({ ...this.state, description: '', listArtist: resp.data.similarartists.artist }))

        axios.get(`${URL}?method=album.search&album=${search}&api_key=53701585b00198db3a80dcf69bc4ef8c&format=json&limit=8`)
            .then(resp => this.setState({ ...this.state, description: '', listAlbum: resp.data.results.albummatches.album }))
    }
    

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleSearchAlbum(description = '') {
        const search = description

    }

    render() {
        return (
            <div className='container'>
                <PageHeader name='last.fm' small='pesquisa'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch} />
                <TodoList 
                listArtist={this.state.listArtist}
                listAlbum={this.state.listAlbum} />
            </div>
        )
    }
} 