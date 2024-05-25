#include <iostream>

using namespace std;

int main() {
    float x, y, z;
    float mult;
    float add;

    x = 10;
    z = 7;
    y = 12;
    mult = x * z;
    add = x + y + z;
    cout << "The area of the triangle is " << mult / 2 << "\n"; // Removed the semicolon here

    cout << "The perimeter of the Triangle is " << add;

    return 0;
}