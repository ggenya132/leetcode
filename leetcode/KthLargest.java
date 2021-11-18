import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Solution {
    public int findKthLargest(int[] nums, int k) {
        if(nums.length == 0){
            return 0;
        }
        PriorityQueue<Integer> queue = new PriorityQueue<>(IntStream.of(nums).boxed().collect(Collectors.toList()));
        int amount = 0;
        int res = 0;
        while(amount <= nums.length - k){
           res = queue.poll();
            amount++;
        }
        return res;
    }
}