import java.util.HashMap;
class LRUCache {

    private Node head;
    private Node tail;
    private int capacity; 
    private HashMap<Integer,Node> c;
    
    public LRUCache(int capacity) {
        tail = new Node();
        head = new Node();
        head.next = tail;
        tail.prev = head;
        this.capacity = capacity; 
        this.c = new HashMap<Integer, Node>(capacity);
    }
    
    public int get(int key) {
        

        Node node = this.c.get(key);
        
        if(node == null){
            return -1;
        };
                        System.out.print(node.prev);
                        System.out.print(node.next);

        remove(node);
        add(node);
        return node.value; 
    }
    
    public void put(int key, int value) {
        if(c.containsKey(key)){
            Node node = c.get(key);
            node.value = value;
            remove(node);
            add(node);
        }
        else {
            if(c.size() == capacity){
                int tailkey = tail.prev.key;
                c.remove(tailkey);
                remove(tail.prev);
            }
            Node newNode = new Node(key, value);
            c.put(key, newNode);
            add(newNode);
        }
    }
    private void add(Node node){
        Node nextHead = head.next;
        nextHead.prev = node;
        node.next = nextHead; 
        node.prev = head;
        head.next = node; 
    }
    private  void remove(Node node){
        Node prev = node.prev;
        Node next = node.next;
        next.prev = prev;
        prev.next = next;
    }
    
    class Node {
        public int key;
        public int value; 
        public Node next;
        public Node prev;
        public Node(){
            
        }
        public Node(Integer key, Integer value){
            this.key = key;
            this.value = value;
        }
    }
    
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */