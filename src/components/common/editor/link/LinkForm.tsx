import { FC } from "react";

interface Props {
  visible: boolean
}

const LinkForm: FC<Props> = ({visible}) => {
  if(!visible) {
    return null
  }


  return (
    <div className="rounded p-2 bg-primary dark:bg-primary-dark shadow-sm shadow-secondary-dark">
      <input
      autoFocus
        type="text"
        placeholder="https://banana.com"
        className="bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary"
      />
      <div className="flex items-center space-x-2 mt-2">
        <input type="checkbox" id="open-in-new-tab" />
        <label htmlFor="open-in-new-tab">open new tab</label>
        <div className="flex-1 text-right">
          <button className="bg-action px-2 py-1 text-primary rounded text-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
