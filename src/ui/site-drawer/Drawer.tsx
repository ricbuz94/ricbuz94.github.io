import "./site-drawer.css";
import { useRef, useEffect } from "react";
import cn from "classnames";
import { createPortal } from "react-dom";
import { useMountTransition } from "../../common/hooks";
import styled from "styled-components";

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");
  return drawerRoot;
}

const StyledDrawerContainer = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  width: 40vw;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background 0.3s ease;
  z-index: 1000;

  & .right {
    top: 0;
    right: 0;
    transform: translateX(100%);
  }

  & .drawer-container.open.in {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

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
    const onKeyPress = (e: KeyboardEvent) => {
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
      className={cn("drawer-container", {
        open: isOpen,
        in: isTransitioning,
        className,
      })}
    >
      <StyledDrawerContainer className={cn("drawer", position)} role="dialog">
        {children}
      </StyledDrawerContainer>
      <div className="backdrop" onClick={onClose} />
    </div>,
    portalRootRef.current
  );
};

export default Drawer;
