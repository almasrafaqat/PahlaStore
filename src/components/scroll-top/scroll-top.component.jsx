import { ArrowUpward } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Wrapper } from "./scroll-top.style";

const ScrollTop = () => {
  const [scrollBtnShow, setScrollBtnShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScrollBtnShow(true);
      } else {
        setScrollBtnShow(false);
      }
    });
  });
  return (
    <Container>
      {scrollBtnShow && (
        <Wrapper
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpward />
        </Wrapper>
      )}
    </Container>
  );
};

export default ScrollTop;
