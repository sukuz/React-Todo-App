import React from "react";

export default function ErrorBoundary(props) {
  if (props.error) {
    // You can render any custom fallback UI
    return <h1 className="error-msg">{props.error}</h1>;
  }

  return props.children;
}
