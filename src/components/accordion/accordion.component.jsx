import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  FilterItem, FilterList, FilterSection, SearchIcon, SearchInput,  CheckIcon  } from "./accordion.style";
import RangeSlider from "../range-slider/range-slider.component";

export default function BasicAccordion() {
  return (
    <>
      <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "bold"}}>Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterSection>
            <FilterItem>
              <FilterList search>
                <SearchIcon />
                <SearchInput placeholder="Search the Product" />
              </FilterList>
            </FilterItem>
          </FilterSection>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: "bold"}}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterSection>
            <FilterItem  >
              <FilterList>
                All
              </FilterList>
              <FilterList active>
                Smartphone
              </FilterList>
              <FilterList>
                Electronics
              </FilterList>
            </FilterItem>
          </FilterSection>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: "bold"}}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterSection>
            <FilterItem  >
              <FilterList>
                All
              </FilterList>
              <FilterList active>
                Dell
              </FilterList>
              <FilterList>
                HP
              </FilterList>
              <FilterList>
                Lenova
              </FilterList>
            </FilterItem>
          </FilterSection>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography style={{fontWeight: "bold"}}>Color</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FilterSection>
          <FilterItem color >
            <FilterList color="yellow">
              
            </FilterList>
            <FilterList activeColor color="black">
            <CheckIcon />
            </FilterList>
            <FilterList color="blue">
              
            </FilterList>
            <FilterList color="red">
              
            </FilterList>
          </FilterItem>
        </FilterSection>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography style={{fontWeight: "bold"}}>Price</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FilterSection>
        <FilterItem price >
          <FilterList>
          <RangeSlider min="0" max="5000" />
          </FilterList>
        </FilterItem>
      </FilterSection>
    </AccordionDetails>
  </Accordion>


    </>
  );
}