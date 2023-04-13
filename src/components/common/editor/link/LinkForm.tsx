import { FC, useState } from "react";

interface Props {
  visible: boolean;
  onSubmit(link: linkOption): void;
}
export type linkOption = {
  url: string;
  openInNewTab: boolean;
};

const LinkForm: FC<Props> = ({ visible, onSubmit }) => {
  const [link, setLink] = useState<linkOption>({
    url: "",
    openInNewTab: false,
  });

  const handleSubmit = () => {
    if (!link.url.trim()) {
      return;
    }
    onSubmit(link);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="rounded p-2 bg-primary dark:bg-primary-dark shadow-sm shadow-secondary-dark">
      <input
        autoFocus
        type="text"
        placeholder="https://banana.com"
        className="bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
      />
      <div className="flex items-center space-x-2 mt-2">
        <input
          type="checkbox"
          id="open-in-new-tab"
          checked={link.openInNewTab}
          onChange={({ target }) =>
            setLink({ ...link, openInNewTab: target.checked })
          }
        />
        <label htmlFor="open-in-new-tab">open new tab</label>
        <div className="flex-1 text-right">
          <button
            className="bg-action px-2 py-1 text-primary rounded text-sm"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
