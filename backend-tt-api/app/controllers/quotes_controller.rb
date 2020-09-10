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
        quote = Quote.new(quote_params)
        quote.save
        render json: quote
    end

    private
    def quote_params
      params.require(:quote).permit(:author, :content)
    end
end
