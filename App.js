import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Mock Data for Categories
const CATEGORIES = [
  { id: 'all', label: 'All', icon: 'apps-outline', iconType: 'Ionicons' },
  { id: 'tech', label: 'Tech', icon: 'laptop-outline', iconType: 'Ionicons' },
  { id: 'audio', label: 'Audio', icon: 'headphones', iconType: 'Feather' },
  { id: 'home', label: 'Home', icon: 'home-outline', iconType: 'Ionicons' },
  { id: 'watches', label: 'Watches', icon: 'watch-outline', iconType: 'Ionicons' },
  { id: 'gaming', label: 'Gaming', icon: 'game-controller-outline', iconType: 'Ionicons' },
];

// Mock Data for Flash Deals
const FLASH_DEALS = [
  {
    id: 'fd-1',
    title: 'Aura Pro ANC Headphones',
    category: 'Audio',
    price: 189.99,
    originalPrice: 279.99,
    discount: '32% OFF',
    rating: 4.9,
    reviews: '2.4k',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fd-2',
    title: 'Horizon Series X Smartwatch',
    category: 'Wearables',
    price: 219.00,
    originalPrice: 320.00,
    discount: '30% OFF',
    rating: 4.8,
    reviews: '1.8k',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fd-3',
    title: 'Pulse Hi-Fi Smart Speaker',
    category: 'Audio',
    price: 99.50,
    originalPrice: 149.00,
    discount: '33% OFF',
    rating: 4.7,
    reviews: '920',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
  },
];

// Mock Data for Popular Products Grid
const POPULAR_PRODUCTS = [
  {
    id: 'p-1',
    title: 'Crochet Doll Pattern: Amigurumi Doll Maya and Lokum',
    tag: 'Best Seller',
    price: 299.07,
    originalPrice: 543.77,
    rating: 4.8,
    reviews: '678',
    image: 'https://i.etsystatic.com/47418534/r/il/f61574/8233071471/il_1588xN.8233071471_3nvd.jpg',
  },
  {
    id: 'p-2',
    title: 'Teddy Bear Crochet Pattern: Amigurumi Plush Toy',
    tag: 'Trending',
    price: 441.93,
    originalPrice: 441.93,
    rating: 4.8,
    reviews: '4.1k',
    image: 'https://i.etsystatic.com/44308742/r/il/a8d43d/6741859565/il_1588xN.6741859565_bgns.jpg',
  },
  {
    id: 'p-3',
    title: 'Apex Lumina Desk Lightbar',
    tag: 'New',
    price: 79.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviews: '610',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p-4',
    title: 'AeroPosture Mesh Chair',
    tag: 'Featured',
    price: 289.00,
    originalPrice: 380.00,
    rating: 4.9,
    reviews: '1.4k',
    image: 'https://images.unsplash.com/photo-1580481077195-c22ae224b105?auto=format&fit=crop&w=600&q=80',
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState(['fd-1', 'p-2']);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Main Scrollable Content */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Header Section */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <View style={styles.locationPinBg}>
              <Ionicons name="location-sharp" size={16} color="#6366F1" />
            </View>
            <View>
              <Text style={styles.locationLabel}>DELIVER TO</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.locationSelectRow}>
                <Text style={styles.locationText}>Greenhills, San Juan</Text>
                <Ionicons name="chevron-down" size={14} color="#0F172A" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={22} color="#0F172A" />
              <View style={styles.badgeNotification}>
                <Text style={styles.badgeNotificationText}>3</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.avatarButton}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                }}
                style={styles.avatarImage}
              />
              <View style={styles.onlineDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. Welcome Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Hello, Sophia 👋</Text>
          <Text style={styles.greetingSubtitle}>Find modern essentials for your space</Text>
        </View>

        {/* 3. Search & Filter Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Feather name="search" size={18} color="#94A3B8" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search gadgets, audio, desk gear..."
              placeholderTextColor="#94A3B8"
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearButton}>
                <Ionicons name="close-circle" size={18} color="#94A3B8" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* 4. Promotional Hero Banner */}
        <View style={styles.heroBannerContainer}>
          <View style={styles.heroBanner}>
            <View style={styles.heroLeft}>
              <View style={styles.heroPill}>
                <Ionicons name="flash" size={12} color="#F59E0B" />
                <Text style={styles.heroPillText}>SPECIAL PROMO</Text>
              </View>

              <Text style={styles.heroHeading}>Upgrade Your{'\n'}Workspace</Text>
              <Text style={styles.heroDescription}>Get up to 40% discount on modern smart gear.</Text>

              <TouchableOpacity activeOpacity={0.85} style={styles.heroCta}>
                <Text style={styles.heroCtaText}>Shop Now</Text>
                <Feather name="arrow-right" size={14} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.heroRight}>
              <View style={styles.heroFloatingBadge}>
                <Text style={styles.heroBadgeText}>-40%</Text>
              </View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80',
                }}
                style={styles.heroProductImage}
              />
            </View>
          </View>

          {/* Carousel Pagination Dots */}
          <View style={styles.carouselPagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* 5. Quick Categories */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  activeOpacity={0.75}
                  onPress={() => setSelectedCategory(cat.id)}
                  style={[styles.categoryChip, isSelected && styles.activeCategoryChip]}
                >
                  <View
                    style={[
                      styles.categoryIconWrap,
                      isSelected && styles.activeCategoryIconWrap,
                    ]}
                  >
                    {cat.iconType === 'Ionicons' ? (
                      <Ionicons
                        name={cat.icon}
                        size={16}
                        color={isSelected ? '#6366F1' : '#64748B'}
                      />
                    ) : (
                      <Feather
                        name={cat.icon}
                        size={16}
                        color={isSelected ? '#6366F1' : '#64748B'}
                      />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.categoryLabel,
                      isSelected && styles.activeCategoryLabel,
                    ]}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 6. Flash Deals Section */}
        <View style={styles.flashDealsSection}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleWithBadge}>
              <Text style={styles.sectionTitle}>Flash Deals</Text>
              <View style={styles.timerBadge}>
                <Ionicons name="time-outline" size={13} color="#D97706" />
                <Text style={styles.timerText}>02:45:18</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalDealsList}
          >
            {FLASH_DEALS.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  style={styles.dealCard}
                >
                  <View style={styles.dealImageWrap}>
                    <Image source={{ uri: item.image }} style={styles.dealImage} />
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountBadgeText}>{item.discount}</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.cardFavButton}
                      onPress={() => toggleFavorite(item.id)}
                    >
                      <Ionicons
                        name={isFav ? 'heart' : 'heart-outline'}
                        size={18}
                        color={isFav ? '#EF4444' : '#64748B'}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.dealCardBody}>
                    <Text style={styles.dealCategory}>{item.category.toUpperCase()}</Text>
                    <Text style={styles.dealTitle} numberOfLines={1}>
                      {item.title}
                    </Text>

                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={14} color="#F59E0B" />
                      <Text style={styles.ratingNumber}>{item.rating}</Text>
                      <Text style={styles.reviewsCount}>({item.reviews})</Text>
                    </View>

                    <View style={styles.priceRow}>
                      <View>
                        <Text style={styles.dealPrice}>₱{item.price.toFixed(2)}</Text>
                        <Text style={styles.dealOriginalPrice}>
                          ₱{item.originalPrice.toFixed(2)}
                        </Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.8} style={styles.addCartBtn}>
                        <Ionicons name="add" size={18} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 7. Value Props / Perks Banner */}
        <View style={styles.perksRow}>
          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: '#EEF2FF' }]}>
              <Feather name="truck" size={16} color="#6366F1" />
            </View>
            <Text style={styles.perkTitle}>Free Delivery</Text>
            <Text style={styles.perkSubtitle}>On orders $50+</Text>
          </View>

          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: '#F0FDF4' }]}>
              <Feather name="shield" size={16} color="#16A34A" />
            </View>
            <Text style={styles.perkTitle}>2-Yr Warranty</Text>
            <Text style={styles.perkSubtitle}>Official guarantee</Text>
          </View>

          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: '#FFFBEB' }]}>
              <Feather name="zap" size={16} color="#D97706" />
            </View>
            <Text style={styles.perkTitle}>Same Day</Text>
            <Text style={styles.perkSubtitle}>Express dispatch</Text>
          </View>
        </View>

        {/* 8. Popular Essentials Grid */}
        <View style={styles.popularSection}>
          <View style={styles.sectionHeaderRow}>
            <View>
              <Text style={styles.sectionTitle}>Popular For You</Text>
              <Text style={styles.sectionSubtitle}>Handpicked based on your taste</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>View More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gridContainer}>
            {POPULAR_PRODUCTS.map((prod) => {
              const isFav = favorites.includes(prod.id);
              return (
                <TouchableOpacity
                  key={prod.id}
                  activeOpacity={0.9}
                  style={styles.gridCard}
                >
                  <View style={styles.gridImageWrap}>
                    <Image source={{ uri: prod.image }} style={styles.gridImage} />
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagBadgeText}>{prod.tag}</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.cardFavButton}
                      onPress={() => toggleFavorite(prod.id)}
                    >
                      <Ionicons
                        name={isFav ? 'heart' : 'heart-outline'}
                        size={17}
                        color={isFav ? '#EF4444' : '#64748B'}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.gridBody}>
                    <Text style={styles.gridTitle} numberOfLines={2}>
                      {prod.title}
                    </Text>

                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={13} color="#F59E0B" />
                      <Text style={styles.ratingNumber}>{prod.rating}</Text>
                      <Text style={styles.reviewsCount}>({prod.reviews})</Text>
                    </View>

                    <View style={styles.gridPriceRow}>
                      <View>
                        <Text style={styles.gridPrice}>₱{prod.price.toFixed(2)}</Text>
                        <Text style={styles.gridOriginalPrice}>
                          ₱{prod.originalPrice.toFixed(2)}
                        </Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.8} style={styles.gridAddBtn}>
                        <Ionicons name="add" size={16} color="#0F172A" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Bottom Padding for floating nav */}
        <View style={{ height: 90 }} />
      </ScrollView>

      {/* 9. Fixed Bottom Navigation Bar */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.75}
            onPress={() => setActiveTab('Home')}
          >
            <View
              style={[
                styles.navIconContainer,
                activeTab === 'Home' && styles.activeNavIconBg,
              ]}
            >
              <Ionicons
                name={activeTab === 'Home' ? 'home' : 'home-outline'}
                size={22}
                color={activeTab === 'Home' ? '#6366F1' : '#94A3B8'}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === 'Home' && styles.activeNavLabel,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.75}
            onPress={() => setActiveTab('Explore')}
          >
            <View
              style={[
                styles.navIconContainer,
                activeTab === 'Explore' && styles.activeNavIconBg,
              ]}
            >
              <Ionicons
                name={activeTab === 'Explore' ? 'compass' : 'compass-outline'}
                size={22}
                color={activeTab === 'Explore' ? '#6366F1' : '#94A3B8'}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === 'Explore' && styles.activeNavLabel,
              ]}
            >
              Explore
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.75}
            onPress={() => setActiveTab('Cart')}
          >
            <View
              style={[
                styles.navIconContainer,
                activeTab === 'Cart' && styles.activeNavIconBg,
              ]}
            >
              <Ionicons
                name={activeTab === 'Cart' ? 'bag' : 'bag-handle-outline'}
                size={22}
                color={activeTab === 'Cart' ? '#6366F1' : '#94A3B8'}
              />
              <View style={styles.navBadge}>
                <Text style={styles.navBadgeText}>2</Text>
              </View>
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === 'Cart' && styles.activeNavLabel,
              ]}
            >
              Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.75}
            onPress={() => setActiveTab('Saved')}
          >
            <View
              style={[
                styles.navIconContainer,
                activeTab === 'Saved' && styles.activeNavIconBg,
              ]}
            >
              <Ionicons
                name={activeTab === 'Saved' ? 'heart' : 'heart-outline'}
                size={22}
                color={activeTab === 'Saved' ? '#6366F1' : '#94A3B8'}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === 'Saved' && styles.activeNavLabel,
              ]}
            >
              Saved
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.75}
            onPress={() => setActiveTab('Profile')}
          >
            <View
              style={[
                styles.navIconContainer,
                activeTab === 'Profile' && styles.activeNavIconBg,
              ]}
            >
              <Ionicons
                name={activeTab === 'Profile' ? 'person' : 'person-outline'}
                size={22}
                color={activeTab === 'Profile' ? '#6366F1' : '#94A3B8'}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === 'Profile' && styles.activeNavLabel,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },

  /* 1. Header Styles */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 24 : 10,
    paddingBottom: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  locationPinBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
  },
  locationSelectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeNotification: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeNotificationText: {
    fontSize: 9,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  avatarButton: {
    position: 'relative',
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#6366F1',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  /* 2. Greeting Section */
  greetingSection: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 14,
  },
  greetingTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  greetingSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },

  /* 3. Search & Filter */
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
  },
  clearButton: {
    padding: 4,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 4. Hero Banner */
  heroBannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  heroBanner: {
    backgroundColor: '#1E1B4B',
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
    minHeight: 165,
  },
  heroLeft: {
    flex: 1.2,
    justifyContent: 'center',
    zIndex: 2,
  },
  heroPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 4,
    marginBottom: 10,
  },
  heroPillText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  heroHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 26,
  },
  heroDescription: {
    fontSize: 12,
    color: '#CBD5E1',
    marginTop: 6,
    marginBottom: 14,
  },
  heroCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
    gap: 6,
  },
  heroCtaText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  heroRight: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heroFloatingBadge: {
    position: 'absolute',
    top: -5,
    right: 0,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 3,
  },
  heroBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  heroProductImage: {
    width: 125,
    height: 125,
    borderRadius: 16,
    transform: [{ rotate: '-6deg' }],
  },
  carouselPagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
  },
  activeDot: {
    width: 18,
    backgroundColor: '#6366F1',
  },

  /* 5. Categories */
  categoriesSection: {
    marginBottom: 24,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6366F1',
  },
  categoriesList: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 30,
    gap: 8,
  },
  activeCategoryChip: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  categoryIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCategoryIconWrap: {
    backgroundColor: '#FFFFFF',
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  activeCategoryLabel: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  /* 6. Flash Deals */
  flashDealsSection: {
    marginBottom: 24,
  },
  sectionTitleWithBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    gap: 4,
  },
  timerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#D97706',
  },
  horizontalDealsList: {
    paddingHorizontal: 20,
    gap: 14,
  },
  dealCard: {
    width: width * 0.58,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  dealImageWrap: {
    width: '100%',
    height: 140,
    backgroundColor: '#F1F5F9',
    position: 'relative',
  },
  dealImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  cardFavButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dealCardBody: {
    padding: 12,
  },
  dealCategory: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  dealTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  ratingNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
  },
  reviewsCount: {
    fontSize: 11,
    color: '#94A3B8',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  dealOriginalPrice: {
    fontSize: 11,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  addCartBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 7. Value Props / Perks */
  perksRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 24,
  },
  perkCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  perkIconBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  perkTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
  },
  perkSubtitle: {
    fontSize: 9,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 2,
  },

  /* 8. Popular Grid */
  popularSection: {
    paddingHorizontal: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  gridCard: {
    width: (width - 54) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  gridImageWrap: {
    width: '100%',
    height: 130,
    backgroundColor: '#F1F5F9',
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  tagBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  gridBody: {
    padding: 12,
  },
  gridTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    minHeight: 34,
  },
  gridPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  gridPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  gridOriginalPrice: {
    fontSize: 11,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  gridAddBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 9. Bottom Navigation Bar */
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingBottom: Platform.OS === 'ios' ? 20 : 12,
    paddingTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    gap: 3,
  },
  navIconContainer: {
    position: 'relative',
    padding: 4,
    borderRadius: 12,
  },
  activeNavIconBg: {
    backgroundColor: '#EEF2FF',
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#94A3B8',
  },
  activeNavLabel: {
    color: '#6366F1',
    fontWeight: '700',
  },
  navBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBadgeText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
