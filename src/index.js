import React from 'react'
import ReactDOM from 'react-dom'

export class Meal {
    constructor(name, url, serves, macros) {
        this._name = name
        this._url = url
        this._serves = serves
        this._macros = macros
    }
    get name() {return this._name}
    get url() {return this._url}
    get serves() {return this._serves}
    get macros() {return this._macros}
}

export class Ingredient {
    constructor(name, macros) {
        this._name = name
        this._macros = macros
    }
    get name() {return this._name}
    get macros() {return this._macros}
}

export class Macros {
    constructor(protein, fat, carbohydrates) {
        this._protein = protein
        this._fat = fat
        this._carbohydrates = carbohydrates
    }

    get protein() {return this._protein}
    get fat() {return this._fat}
    get carbohydrates() {return this._carbohydrates}
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

export const MacrosDisplay = (props) => {
    return (
        <div>
            <p className="has-text-info">Quantity each serve:</p>
            Protein: {props.value.protein}g,
            Fat: {props.value.fat}g,
            Carbs: {props.value.carbohydrates}g
        </div>
    )
}

export function MealListing(props) {
    return (
        <div className="has-background-primary-light" style={{
            padding: "1rem",
            margin: "2px"
        }}>
            <a className="has-text-link-dark" href={props.meal.url}>{props.meal.name}</a>:
            <MacrosDisplay value={props.meal.macros}/> 
        </div>
    )
}

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return <input type="text" className="input" placeholder="Search" onChange={this.props.searchBarOnChange} />
    }
}

export class SortingAffordance extends React.Component {
    render() {
        return (
            <fieldset style={{
                border: "1px solid #bbb", 
                borderRadius: "4px", 
                padding: "0.5rem",
                marginTop: "2px"
                }} 
            onChange={this.props.sortOnChange}>
                <p>Sort order:</p>
                <div className="control" style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <div>
                        <label className="radio" htmlFor="nameRadio">Name</label>
                        <input id="nameRadio" type="radio" name="sortKey" value="name" />
                    </div>
                    <div>
                        <label className="radio" htmlFor="proteinRadio">Protein</label>
                        <input id="proteinRadio" type="radio" name="sortKey" value="protein" />
                    </div>
                    <div>
                        <label className="radio" htmlFor="fatRadio">Fat</label>
                        <input id="fatRadio" type="radio" name="sortKey" value="fat" />
                    </div>
                    <div>
                        <label className="radio" htmlFor="carbRadio">Carbohydrates</label>
                        <input id="carbRadio" type="radio" name="sortKey" value="carbohydrates" />
                    </div>
                </div>
            </fieldset>
        )
    }
}

export class MealList extends React.Component {
    constructor() {
        super()
        const meal1 = new Meal('Spaghetti Bolognaise', 'https://recipes.sparkpeople.com/recipe-detail.asp?recipe=41792', 8,
            new Macros(65, 37.5, 15))
        const meal2 = new Meal('Burrito Bowl', 'https://cookieandkate.com/black-bean-burrito-bowl-recipe/', 4,
            new Macros(33, 42, 25))
        const meal3 = new Meal('Fried Rice', 'https://cookieandkate.com/vegetable-fried-rice-recipe/', 3,
            new Macros(23, 22, 20))
        const meal4 = new Meal('Meatloaf', 'https://www.bbcgoodfood.com/recipes/easy-meatloaf-recipe', 8,
            new Macros(18, 10, 5))
        const meal5 = new Meal('Curry', 'https://tasteasianfood.com/japanese-curry/', 6,
            new Macros(10, 30, 20))
        const meal6 = new Meal('Bibimbap', 'https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/', 4,
            new Macros(30, 10, 20))
        const meal7 = new Meal('Chicken Soup', 'https://www.heartfoundation.org.au/recipes/chicken-and-corn-soup', 4,
            new Macros(14, 20, 20))
        const mealList = [meal1, meal2, meal3, meal4, meal5, meal6, meal7]

        this.state = {
            meals: mealList,
            searchValue: '',
            sortValue: ''
        }
    }

    searchBarOnChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    sortingAffordanceOnChange = (event) => {
        this.setState({
            sortValue: event.target.value
        })
    }

    render() {
        const filteredMeals = this.state.meals.filter(meal => {
            return meal.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        const sortedMeals = filteredMeals.sort((a, b) => {
            if (this.state.sortValue === 'name') {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if( nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                }
                return 0
            }
            return b.macros[this.state.sortValue] - a.macros[this.state.sortValue]
        })

        let meals = []
        for (let meal of sortedMeals) {
            meals.push(<MealListing key={meal.name.toString()} meal={meal} />)
        }
        return (
            <div>
                <h1 className="is-size-3 has-text-centered has-text-weight-bold">
                    Meals
                </h1>
                <SearchBar
                    searchBarOnChange={this.searchBarOnChange}
                    searchValue={this.state.searchValue} />
                <SortingAffordance sortOnChange={this.sortingAffordanceOnChange} />
                <div>{meals}</div>
            </div>
        )
    }
}

export const Demo = () => {
        return (
            <ErrorBoundary>
                <MealList />
            </ErrorBoundary>
        )
}

