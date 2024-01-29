import React from 'react'
import PropTypes from 'prop-types'
import { PaginateWrapper } from './Paginate.styled'
import ReactPaginate from 'react-paginate'
import ArrowLeft from '/public/images/svg/arrow-left.svg?react'
import ArrowRight from '/public/images/svg/arrow-right.svg?react'

const Paginate = ({ pageCount, setPage, page }) => {
  const handleChangePage = (value) => {
    setPage(value + 1)
  }

  return (
    <PaginateWrapper>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        activeClassName="active"
        containerClassName="pagination"
        pageClassName="item"
        pageLinkClassName="item"
        onPageChange={({ selected }) => handleChangePage(selected)}
        nextLabel={
          page === pageCount - 1 ? null : (
            <div className="arrow-btn">
              <ArrowRight />
            </div>
          )
        }
        previousLabel={
          page <= 1 ? null : (
            <div className="arrow-btn">
              <ArrowLeft />
            </div>
          )
        }
      />
    </PaginateWrapper>
  )
}

Paginate.propTypes = {}

Paginate.defaultProps = {}

export default Paginate
