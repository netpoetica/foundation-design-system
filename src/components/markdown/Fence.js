import React from "react";
import classNames from "classnames";
import { useCopyToClipboard } from "../../lib/hooks";
import Copy from "../../lib/icons/copy";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-hoon");

export default function Fence({
  children,
  language,
  copy = false,
  mode = "full",
}) {
  const [copyStatus, useCopy] = useCopyToClipboard(children);
  const [collapsed, setCollapse] = React.useState(Boolean(mode === "collapse"));
  return (
    <div
      className={classNames("relative rounded-xl", {
        "max-h-60 overflow-hidden": collapsed,
      })}
    >
      {collapsed && (
        <>
          <div className="absolute w-full h-44 bottom-0 overflow-hidden bg-gradient-to-b from-[rgb(255,255,255,0)] to-white z-10 rounded-xl opacity-80"></div>
          <div
            className="absolute w-full h-full flex justify-center items-end z-20 cursor-pointer"
            onClick={() => setCollapse(false)}
          >
            <p className="!text-sm !font-semibold">Click to expand</p>
          </div>
        </>
      )}
      {copy && (
        <div
          className="absolute flex items-center justify-center top-4 right-5 z-10 cursor-pointer !p-2 border rounded-xl border-[#afaeab]"
          onClick={useCopy}
        >
          <p>
            {copyStatus === "inactive" ? (
              <Copy />
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.54325 11.4247L12.1498 5.66647L11.3169 5.00013L7.39013 9.90859L4.60812 7.59025L3.92526 8.40969L7.54325 11.4247Z"
                  fill="#afaeab"
                />
              </svg>
            )}
          </p>
        </div>
      )}
      <Highlight
        {...defaultProps}
        key={language}
        language={language}
        code={children}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={classNames(className, {
              "max-h-96 overflow-y-auto": Boolean(mode === "scroll"),
            })}
            style={style}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}