import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuoteCards = () => {
    return this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={this.onRemoveQuote} upvoteQuote={this.onUpvoteQuote} downvoteQuote={this.onDownvoteQuote}/>)
  }

  onRemoveQuote = (quoteId) => {
    this.props.removeQuote(quoteId)
  }

  onUpvoteQuote = (quoteId) => {
    this.props.upvoteQuote(quoteId)
  }

  onDownvoteQuote = (quoteId) => {
    this.props.downvoteQuote(quoteId)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {removeQuote, downvoteQuote, upvoteQuote})(Quotes);
