class QuoteSerializer
    def initialize(quote_obj)
        @quote = quote_obj
    end

    def to_serialized_json
        @quote.to_json(
            :only => [:content, :author, :id]
        )
    end
end
