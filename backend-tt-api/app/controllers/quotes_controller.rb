class QuotesController < ApplicationController
    def index
        quotes = Quote.all
        render json: QuoteSerializer.new(quotes).to_serialized_json
    end

    def show
        quote = Quote.find_by(id: params[:id])
        render json: quote
    end

    def create
        author = params[:author]
        content = params[:content]

        quote = Quote.create(author: author, content: content)
        render json: quote
    end
end
