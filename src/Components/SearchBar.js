import "../Scss/SearchBar.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchInput">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="물품이나 동네를 검색해보세요"
          />
        </InputGroup>
      </div>
      <div className="Chatting">
        <Button variant="outline-secondary">채팅하기 </Button>
      </div>
    </div>
  );
}
