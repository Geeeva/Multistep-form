import React, {Component} from 'react';
import './Table.css';
import TableRow from './TableRow/TableRow';
import Pagination from './Pagination/Pagination';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredData: this.props.data,
            searchFieldInput: '',
            radioSearch: "title",
            selectBoxOption: -1,
            currentPage: 2,
            activePage: true,
            activeIndex: 0,
            itemsPerPage: 5
        }
    }

     /*On input field changing*/

    updatedSearch = (event) => {
        this.setState({
            searchFieldInput: event.target.value
        })
    }

    /*Radio buttons selection*/

    searchHandler = (event) => {
        this.setState({
            radioSearch: event.target.value
        })
    };

    /*Select box selection*/

    selectBoxHandler = (event) => {
        this.setState({selectBoxOption: event.target.value});
    }

    submitHandler = (event) => {

        event.preventDefault();

        /*Check if the "title" radio option & select box option is selected*/

        let searchRadioType = this.state.radioSearch;
        
        let filteredData = this.props.data.filter(column => {
            return column[searchRadioType].toLowerCase().indexOf(this.state.searchFieldInput.toLowerCase()) !== -1 && column.rating >= this.state.selectBoxOption;
        });
        
        this.setState({
            filteredData: filteredData
        });

        sessionStorage.setItem('data', this.state.filteredData);
    }

    /*Deleting item from film list, when clicking on x*/

    buttonDeleteHandler = (index) => {
        const filteredData = [...this.state.filteredData];
        filteredData.splice(index, 1);
        this.setState({
            filteredData: filteredData
        });
    }

    /*Manages the pagination*/

    paginationClickHandler = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
            activeIndex: Number(event.target.id)
        });
    }

    /*Loads the selected array of films from localStorage*/

    componentWillMount() {
        localStorage.getItem('filteredData') && this.setState({
            filteredData: JSON.parse(localStorage.getItem('filteredData'))
        }) 
    }

    /*Sets selected array of films in localStorage*/

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('filteredData', JSON.stringify(nextState.filteredData));
        localStorage.setItem('filteredDataDate', Date.now());
    }

    render() {
        console.log(this.state.currentPage);
        const indexOfLastItemfilteredData = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstItemfilteredData = indexOfLastItemfilteredData - this.state.itemsPerPage;
        const currentSet = this.state.filteredData.slice(indexOfFirstItemfilteredData, indexOfLastItemfilteredData);

        /*Reproducing page with 5 items*/

        const renderItems = currentSet.map((row, index) => {
            return (
                <TableRow 
                    numeration={index + 1}
                    key={row.id} 
                    row={row}
                    clicked={this.buttonDeleteHandler.bind(this, index)}
                />          
            )
        })

        /*Creating array for pagination*/

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.filteredData.length / this.state.itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        /*Implementing array of pagination*/

        const renderPageNumbers = pageNumbers.map((number, index) => {
            return (
                <li className="Pagination"
                    key={number}
                    id={number}
                    onClick={this.paginationClickHandler.bind(index)}
                >
                  {number}
                </li>
            );
        });

        /*const renderPageNumbers = pageNumbers.map((number, index) => {
            const active = this.state.activeIndex;
            console.log(active);
            return (
                <Pagination
                    key={number}
                    id={number}
                    active={index === active} //Vraca true ili false 
                    clicked={this.paginationClickHandler}
                />
            );
        })*/
        
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="FormWrapper">
                            <form className="FormContainer">
                                {/*Search field*/}  
                                <input
                                    className="Search" 
                                    type="text"
                                    placeholder="Type here"
                                    maxLength="20"
                                    value={this.state.searchFieldInput} required
                                    onChange={this.updatedSearch.bind(this)}
                                />

                                <button className="submit" type="submit" onClick={event => this.submitHandler(event)}>
                                    Search
                                </button>

                                {/*Radio buttons*/}
                                <div>
                                    <label className="forTitle" htmlFor="title">
                                        <input type="radio" name="title" id="title" value="title" checked={this.state.radioSearch === "title"} 
                                        onChange={this.searchHandler}/>
                                        title
                                    </label>
                                    <label className="forGenre" htmlFor="genre">
                                        <input type="radio" name="genre" id="genre" value="genre" checked={this.state.radioSearch === "genre"} 
                                        onChange={this.searchHandler}/>
                                        genre
                                    </label> 
                                </div>

                                {/*Select dropdown*/}

                                {/*<select value={this.state.selectBoxOption} onChange={this.selectBoxHandler}>
                                    <option value='-1' disabled>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>*/}

                                <select value={this.state.selectBoxOption} onChange={(e)=>{this.setState({selectBoxOption: e.target.value})}}>
                                    <option value='-1' disabled>Rating</option>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i,j)=>{
                                          return <option key={i} value={i}>{i}</option>
                                        })
                                    }
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <div className="TableHeading">
                                <div>No.</div>
                                <div>Photo</div>
                                <div>Title</div>
                                <div>Release date</div>
                                <div>Genre</div>
                                <div>Production company</div>
                                <div>Rating</div>
                                <div></div>
                            </div>
                            <div className="TableDataWrapper">
                                {renderItems}
                            </div>
                            <div className="PaginationWrapper">
                                <ul>
                                    {renderPageNumbers}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>     
            </React.Fragment>
        )
    }
}

export default Table;