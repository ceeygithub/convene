
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';

const StyledCiSearch = styled(CiSearch)`
  fill: white;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
   border-radius: 5px; 
  height: 35px;
   border: none;

`;

const Input = styled.input`
  flex: 1;
   border: 1px solid grey;
  outline: none;
  padding: 10px;
  height: 100%;
    border-radius: 5px 0 0 5px;

`;
const Location = styled.input`
  flex: 1;
   border: 1px solid grey;
  outline: none;
  padding: 10px;
  height: 100%;
    border-left: none;

`;

const Button = styled.button`
  background: var(--pryColor);
  border: none;
  border-radius: 0 5px 5px 0;
  font-weight: 500;
  height: 100%;
  width: 3rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  list-style: none;
  border: 1px solid var(--pryColor);


      &:hover {
    background: green;
       border: 1px solid green;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="search" placeholder="Search Events" />
      <Location type="search" placeholder="Location" />
      <Button>
        <StyledCiSearch />
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
