use wasm_game_of_life::Universal;

fn main() {
    let mut universe = Universal::new(64, 64);
    universe.tick();
    println!("{}", universe);
}
