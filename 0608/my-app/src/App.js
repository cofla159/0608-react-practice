import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

function Header() {
  return <header><h1><a href='/'>WWW</a></h1></header>
}

function Nav(props) {
  const list = props.data.map(el => <li><a href={'/read/'+el.id}>{el.title}</a></li>)
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'}
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="HI" body="Hello, WEB!"></Article>
      <ButtonGroup>
        <Button variant='outlined'>Create</Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup><br></br>
      <Button variant='outlined'>Delete</Button>
    </div>
  );
}

export default App;
