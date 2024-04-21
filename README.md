## React Hooks


### useState -
#### useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.



####  In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.

```javascript

const ExploreGarage = () =>{
    return (
        <div className = 'explore-garge' id= 'explore-garge'>
        <h1>Explore Our Garage<h1/>
        <p className='explore-garage-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident distinctio earum totam eius! Saepe sit veniam porro, obcaecati ipsa molestias voluptates et ea illum doloribus.</p>
        <div className = 'explore-garge-lise'>
        {Garage_list.map(item, index) =>{
            return(
                <div key = {index} className = 'explore-garage-list-item'>
                <img src ={item.bike_image} alt= ''/>
                <p>{item.bike_name}<p>
            )
        }}
        </div>

    )
}
```


### ContextAPI
#### lets say you have created four componentes; Component A, Component B, Component C, Component D

### Now in component A and there you have created a state which has a function> which has value, Key. Now you want to access that state in component D. The traditional method to resolve this problem is you will give that state to Component B > then > Component C > then > Component D. 

### But this create a problem in React which we call {propsDrilling}. We are unecessary passing the state to B & C component. That makes code look ugly. To fix it we need a method where we can dirctly use that method in Component D withour passing it down to B & C. That's when contextAPI comes in picture.

### Now what we can do is create that State in sperate Context API file. Then we can use that state variable in Component A & D without drilling it down. Just passing it to both components using context API. Also if the state has been change in Components A the state will automatically will be changed in Component D. Becaue the Component D is a child of Component A. Once the Component A re-renders it will push component D to re-render itself.
### To use this feature you have to make sure that you wrap all the component (A,B,C,D) inside the tags of {ContxtProvider}


``` javascript

const [category, useCategory] = useState("All");
<div onClick= {prev => setCategory(prev.value === ?)}></div>

```
