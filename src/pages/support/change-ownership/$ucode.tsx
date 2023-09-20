import { useParams } from "react-router";
import {Link} from "react-router-dom";

function CreateChangeOwnershipUcode() {
const { ucode } = useParams();
  return (
    <div>
      <h1>Change Ownership Ucode {ucode}</h1>
    <Link to={'/support/change-ownership'}>Back Home</Link>
    </div>
  );
}

export default CreateChangeOwnershipUcode;
