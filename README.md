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