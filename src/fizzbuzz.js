function FizzBuzz() {

    self = this;
    this.words = ["fizz", "buzz", "fizzbuzz"]
    this.count_limit = 0
    this.number = [3,5]
    this.numbers = []


    this.get_array_of_numbers = function(word, count) {
        self.numbers = [];
        if (first_error_check(word,count) == "error") return "error";
        set_the_number(word);
        loop_through_numbers(count);
        return last_error_check();
    }

    function loop_through_numbers(count) {
        for (var i=1; i <= count; i++) {
            add_to_numbers_array(i);
        }
    }

    function add_to_numbers_array(i) {
        if (check_number(3, i)) self.numbers.push(i);
        else if (check_number(5,i)) self.numbers.push(i);
        else if (self.number[0] == 3) {
            if (i % 5 == 0 || i % 3 == 0) self.numbers.push(i);
        }
    }

    function  check_number(number, i) {
        return self.number == number && i % self.number == 0
    }

    function set_the_number(word) {
        if (word == "fizz") self.number = 3;
        else if (word == "buzz") self.number = 5
        else self.number = [3,5]
    }

    function first_error_check(word, count) {
        if(!(self.words.includes(word))) return "error";
        if(!(count > self.count_limit)) return "error"
    }

    function last_error_check() {
        if (self.numbers.length == 0) return "error";
        return self.numbers; 
    }

}

module.exports = FizzBuzz;
