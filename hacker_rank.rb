#==================
# SIMPLE ARRAY SUM
#==================

#aka reducing in fucking ruby

array = [1, 2, 3]
# ruby is nuts, y'all
puts array.reduce(:+)


#======================
# COMPARE THE TRIPLETS
#======================

class Scores
  attr_accessor :a, :b
  def initialize(a_array, b_array)
    @a = 0
    @b = 0
    @a_array = a_array
    @b_array = b_array
  end
  
  def compareTriplets
    for i in 0..2
      if @a_array[i] > @b_array[i]
        @a += 1
      elsif @a_array[i] < @b_array[i]
        @b += 1
      end
    end
    puts @a, @b
  end
end

a_array = [5, 6, 7]
b_array = [3, 6, 10]
score = Scores.new(a_array, b_array)

score.compareTriplets