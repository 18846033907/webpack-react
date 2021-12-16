import "./index.css";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  handleChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        setName(value);
      case "pwd":
        setPassword(value);
      default:
        break;
    }
  };
  handleClick = () => {
    console.log(name, password);
  };
  return (
    <dix>
      <input
        className={classname1}
        onChange={(e) => handleChange(e, "name")}
        value={name}
      />
      <input onChange={(e) => handleChange(e, "pwd")} value={password} />
      <button onClick={handleClick}>提交</button>
    </dix>
  );
};

class Index extends Components {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.name;
    switch (type) {
      case "name":
        this.setState({ name: value });
      case "pwd":
        this.setState({ password: value });
      default:
        break;
    }
  };
  handleClick = () => {
    const { name, password } = this.state;
    console.log(name, password);
  };
  render() {
    const { name, password } = this.state;
    return (
      <dix>
        <input onChange={this.handleChange} value={name} name="name" />
        <input onChange={this.handleChange} value={password} name="password" />
        <button onClick={this.handleClick}>提交</button>
      </dix>
    );
  }
}

function createPop() {
  const pop = document.createElement("div");
  pop.setAttribute("id", "pop");
  pop.setAttribute("class", "pop");
  return pop;
}
document.body.appendChild(createPop());

{
  /* <botton onclick='click'>Click</botton> */
}
function click(e) {
  const text = e.target.text;
  const pop1 = document.getElementById("pop");
  pop1.style.display = "block";
  pop1.innerHTML = text;
  setTimeout(() => {
    pop1.style.display = "none";
  }, 3000);
}
