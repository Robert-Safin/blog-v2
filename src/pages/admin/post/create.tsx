import  Editor  from '../../../components/common/editor/index'
import { NextPage } from "next";

interface Props {}

const Create: NextPage<Props> = () => {
  return(
    <div className='max-w-4xl mx-auto'>
      <Editor/>
    </div>

  )
};

export default Create;
