const Hello = name =>
    <div>
        Hello, {name}!
        <button on-click="2">+1</button>
    </div>

export default <Hello name="World"/>

console.log(<Hello name="World"/>)