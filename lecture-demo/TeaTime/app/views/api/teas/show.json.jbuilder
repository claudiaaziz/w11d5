transactions = @tea.transactions.includes(:user)

json.tea do
    # json.extract! @tea, :id, :flavor, :description, :price
    json.partial! "tea", tea: @tea
    json.transaction_ids @tea.transaction_ids
end


json.transactions do
    transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :id, :quantity, :created_at
            json.customer transaction.user.username
        end
    end
    # json.dummy 'hellow'
    
end