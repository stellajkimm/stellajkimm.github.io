# U2.W5: Die Class 2: Arbitrary Symbols


# I worked on this challenge [by myself].

# 2. Pseudocode

# Input:
# Output:
# Steps:


# 3. Initial Solution

class Die
	attr_accessor :labels
  def initialize(labels)
  	raise ArgumentError.new("The number of objects in labels is not valid") if labels.length < 1
  	@labels = labels
  end

  def sides
  	@labels.length
  end

  def roll
  	@labels.sample
  end
end

# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE

d1 = Die.new(["A", "B", "C"])
d2 = Die.new([1,2,3,4,5,6])
d3 = Die.new(["Stella", "Jade", "Erica", "Stephanie", "Soo", "Jennifer"])

p d1.sides == 3
p d2.sides == 6
p d2.sides == 6

p d1.labels.include? d1.roll
p d2.labels.include? d2.roll
p d3.labels.include? d3.roll


# 5. Reflection 
# 
# This was also a very simple exercise.  I got the concepts right away.  I think I did the tests right too.
# I think I'm getting the hang of driver tests.  Can't be too sure though.  I don't think I'm confused with
# any of these concepts right now.
