# U2.W4: Create Accountability Groups


# I worked on this challenge [by myself].

# 2. Pseudocode

# Input:  array of names
# Output:  groups of names of 4 for 3 different units
# Steps: 
# define an array of names with the list of people in cohort
# verify if length of array is divisible by 4


# 3. Initial Solution

# name = ["Yariv", "Jake", "Christian", "Adrian", "Alan", "Ken", "Armen", "Drew", "RJ", "Gabe", "Antonio", "Ben", "Ian", "Sid", "Adam", "Lexie", "Stella", "Brendan", "Vivek", "Gregory", "Katie"]

def acc_group(names)
	names.shuffle!
	groups = names.each_slice(4).to_a
	if names.length % 4 == 1
		groups[0] << groups.last[0]
		groups.pop
	elsif names.length % 4 == 2
		groups[0] << groups.last[0]
		groups[1] << groups.last[1]
		groups.pop
	elsif names.length % 4 == 3
		groups[0] << groups.last[0]
		groups[1] << groups.last[1]
		groups[2] << groups.last[2]
		groups.pop
	end
	i = 1
	while i <= groups.length
		puts "Group " + i.to_s
		puts groups[i-1]
		i += 1
	end
end



# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE

describe 'acc_group' do
  let(:name_1) { ["Yariv", "Jake", "Christian", "Adrian", "Alan", "Ken", "Armen", "Drew", "RJ", "Gabe", "Antonio", "Ben", "Ian", "Sid", "Adam", "Lexie", "Stella", "Brendan", "Vivek", "Gregory", "Katie"]
 }
  let(:name_2) { ["Yariv", "Jake", "Christian", "Adrian", "Alan", "Ken", "Armen", "Drew", "RJ", "Gabe", "Antonio", "Ben", "Ian", "Sid", "Adam", "Lexie", "Stella", "Brendan", "Vivek", "Gregory"] }

  it "is defined as a method" do
    defined?(acc_group).should eq 'method'
  end

  it "requires a single argument" do
    method(:acc_group).arity.should eq 1
  end
end





# 5. Reflection 
# 
# To be honest, I know there is a more efficient way to rewrite the if statement in my code
# but i cant think of it right now.  I need to go back to this.  Also, I am still really confused
# as to how to write driver tests.  I will get back to this as well.  For now, I only copied the
# driver tests from the earlier challenge that tests if it is a method and there is 1 argument.
# I also know there are more things I can do with this code.  For example, I can try to make sure that
# students aren't in the same accountability group each unit.  THis is something I need to work on as well.
# I'm sorry that my solution isn't complete, but I will try to fix this.


