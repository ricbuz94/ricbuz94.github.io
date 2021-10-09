import "./site-drawer.css";
import { useRef, useEffect } from "react";
import cn from "classnames";
import { createPortal } from "react-dom";
import { useMountTransition } from "../../common/hooks";

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");
  return drawerRoot;
}

const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = "right",
  removeWhenClosed = true,
}) => {
  const isTransitioning = useMountTransition(isOpen, 300);
  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );

  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;
    return () => {
      portal.remove();
      bodyEl.style.overflow = "";
    };
  }, []);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }
  return createPortal(
    <div
      aria-hidden={isOpen ? "false" : "true"}
      className={cn("drawer-container", className, {
        open: isOpen,
        in: isTransitioning,
      })}
    >
      <div className={cn("drawer", position)} role="dialog">
        {" "}
        {children}{" "}
      </div>{" "}
      <div className="backdrop" onClick={onClose} />
    </div>,
    portalRootRef.current
  );
};

export default Drawer;
