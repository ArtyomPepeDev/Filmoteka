import styled from 'styled-components';

export const PaginateWrapper = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .item {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 13px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;

    cursor: pointer;
  }

  .arrow-btn {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 13px;
    border-radius: 5px;
    background-color: #f7f7f7;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .active {
    background-color: #ff6b08;
    color: #ffffff;
  }
`
