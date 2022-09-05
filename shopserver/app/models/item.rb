
class Item < ActiveRecord::Base
    belongs_to :category


    def self.createdata
        self.all.order(:created_at)
    end
end