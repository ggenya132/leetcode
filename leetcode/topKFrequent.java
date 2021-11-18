import java.util.HashMap;
import java.util.PriorityQueue;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {

  
        HashMap<Integer,Integer> map = new HashMap<>();
              PriorityQueue<Integer> queue = new PriorityQueue<>((a,b)-> {
                return map.get(b) - map.get(a);
        });
        for(int num : nums){
            map.put(num , map.get(num) ? map.get(num) + 1 : 1);
        }
        for(int num : map.keySet()){
            queue.offer(num);
            if(queue.size() > k){
                queue.poll();
            }
        }
        return 0;
    }
}