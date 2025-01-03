class Api::TeasController < ApplicationController

    def show
        @tea = Tea.find(params[:id])
        render :show
    end

    def index
        @teas = Tea.all
        # render json: @teas
        render :index
    end

    def create
        tea = Tea.new(tea_params)
        if tea.save
            render json: tea
        else
            render json: tea.errors.full_messages, status: 422
        end
    end

    def tea_params
        params.require(:tea).permit(:flavor, :price, :description)
    end

end
